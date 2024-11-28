import React, { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import StockItem from "../StockItem/StockItem";
import { fetchStocks } from "../../services/stockApi";
import { useAppStore } from "../../store/AppStore";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const StockList: React.FC = () => {
  const search = useAppStore((state) => state.search);

  const {
    data,
    fetchNextPage,
    hasNextPage,
   // isFetching, TODO: check if we need it
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

  return (
    <InfiniteScroll
      dataLength={data?.pages.length || 0}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<LoadingSpinner />}
    >
      {data?.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.results.map((stock) => (
            <StockItem key={stock.ticker} stock={stock} />
          ))}
        </React.Fragment>
      ))}
    </InfiniteScroll>
  );
};

export default StockList;