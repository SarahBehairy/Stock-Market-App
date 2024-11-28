import React, { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import StockItem from "../StockItem/StockItem";
import { fetchStocks } from "../../services/stockApi";
import { useAppStore } from "../../store/AppStore";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { EmptyState } from "../EmptyState";

const StockList: React.FC = () => {
  const search = useAppStore((state) => state.search);

  const {
    data,
    fetchNextPage,
    hasNextPage,
   isFetching, 
  } = useInfiniteQuery(
    ["stocks", search],
    ({ pageParam = 1 }) => fetchStocks(pageParam, search),
    {
      getNextPageParam: (lastPage) => lastPage.next_url || undefined,
      staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    }
  );

  useEffect(() => {
    // Refetch on search change
  }, [search]);


  if(isFetching) return "Searching ..."
  else if(!data) return <EmptyState/>

  return (
    <InfiniteScroll
      dataLength={data?.pages.length || 0}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<LoadingSpinner />}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        padding: '16px',
        justifyContent: 'center'
      }}
    >
      {data?.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.results.map((stock) => (
            <div key={stock.ticker + stock.cik} style={{ flex: '1', maxWidth: '400px', minWidth: '250px', display: 'flex' }}>
              <StockItem stock={stock} />
            </div>
          ))}
        </React.Fragment>
      ))}
    </InfiniteScroll>
  );
};

export default StockList;