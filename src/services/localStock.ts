export interface StockItem {
  id: string;
  name: string;
  inStock: boolean;
}

// Fetch stock data from local CSV file
export async function fetchStockData(): Promise<StockItem[]> {
  try {
    console.log('Fetching stock data from local CSV...');
    
    const response = await fetch('/stock.csv');
    
    if (!response.ok) {
      console.error('Failed to fetch stock CSV:', response.status);
      return getFallbackStockData();
    }

    const csvText = await response.text();
    console.log('Stock CSV loaded:', csvText);
    
    // Parse CSV
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',');
    
    const stockItems: StockItem[] = lines
      .slice(1) // Skip header
      .map(line => {
        const values = line.split(',');
        return {
          id: values[0]?.trim() || '',
          name: values[1]?.trim() || '',
          inStock: values[2]?.trim().toLowerCase() === 'true'
        };
      })
      .filter(item => item.id);

    console.log('Processed stock items:', stockItems);
    return stockItems;
  } catch (error) {
    console.error('Error fetching stock data from CSV:', error);
    return getFallbackStockData();
  }
}

function getFallbackStockData(): StockItem[] {
  return [
    { id: 'haakh-anchaar', name: 'Haakh-e-Anchaar', inStock: true },
    { id: 'mixed-anchaar', name: 'Mixed Anchaar', inStock: true }
  ];
}

export function isItemInStock(itemId: string, stockData: StockItem[]): boolean {
  const stockItem = stockData.find(item => item.id === itemId);
  return stockItem ? stockItem.inStock : false;
}

export function getItemStock(itemId: string, stockData: StockItem[]): boolean {
  const stockItem = stockData.find(item => item.id === itemId);
  return stockItem ? stockItem.inStock : false;
}
