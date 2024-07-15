export const FetchData = async (
  api: string,
  callback: (data: any | any[]) => void
) => {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    callback(result.data);
  } catch (error) {
    callback("server issue");
  }
};
export default function useData(
  api: string,
  callback: (data: any | any[]) => void
) {
  const fetchListener = () => {
    FetchData(api, callback);
  };
  return fetchListener;
}
