import { render, screen } from '@testing-library/react';
import Header from './Header';
import { useAppStore } from '../../store/AppStore';

// Mock the dependencies
jest.mock('../../store/AppStore', () => ({
  useAppStore: jest.fn(),
}));
jest.mock('../SearchBar/SearchBar', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="mock-search-bar">Search Bar</div>
  };
});


describe('Header', () => {
  const mockToggleDarkMode = jest.fn();
  
  beforeEach(() => {
    (useAppStore as unknown as jest.Mock).mockImplementation((selector) => {
        if (selector.name === "toggleDarkMode") {
          return mockToggleDarkMode;
        }
        if (selector.name === "darkMode") {
          return false; 
        }
      });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the header with logo and search bar', () => {
    render(<Header />);
    expect(screen.getByAltText('Nasdaq Logo')).toBeInTheDocument();
    expect(screen.getByTestId('mock-search-bar')).toBeInTheDocument();
  });

  it('renders dark mode toggle button', () => {
    render(<Header />);
    const darkModeButton = screen.getByLabelText('toggle-theme-icon');
    expect(darkModeButton).toBeInTheDocument();
  });


  it('displays dark mode icon when in light mode', () => {
    (useAppStore as unknown as jest.Mock).mockImplementation((selector) => {
        if (selector.name === "toggleDarkMode") {
          return mockToggleDarkMode;
        }
        if (selector.name === "darkMode") {
          return false; 
        }
      });
    render(<Header />);
    expect(screen.getByLabelText('dark-mode-icon')).toBeInTheDocument();
  });
});
