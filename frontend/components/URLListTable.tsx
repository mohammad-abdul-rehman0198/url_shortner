import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import Button from "@/components/ui/buttons/Button";
import Loader from "@/components/ui/loaders/Loader";
import { getAllUrl } from "@/app/actions/url/getAllUrl";
import { ShortenedUrl } from "@/utils/interface/ShortenedURL";


interface URLListTableProps {
  urlList: ShortenedUrl[];
  setUrlList: (urlList: ShortenedUrl[]) => void;
  copiedUrl: string | null;
  handleCopy: (url: string) => void;
}

const URLListTable = ({
  urlList,
  setUrlList,
  copiedUrl,
  handleCopy,
}: URLListTableProps) => {
 const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const getUrlList = async () => {
      setIsLoading(true);
      const response = await getAllUrl();
      setIsLoading(false);
      if (response.success) {
        setUrlList(response.urls);
      } else {
        toast.error(response.message);
      }
    };
    getUrlList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <ToastContainer />

      {urlList.length > 0 && !isLoading && (
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse mb-8">
            <caption className="text-lg font-bold text-gray-700 mb-4 w-full text-left">
              Recent URLs
            </caption>
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                  Original URL
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                  Short URL
                </th>
              </tr>
            </thead>
            <tbody>
              {urlList.map((url, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-3 text-sm text-gray-800 border-b break-all">
                    {url.original}
                  </td>
                  <td className="px-4 py-3 text-sm text-green-600 font-mono border-b">
                    <div className="flex items-center gap-2">
                      <span className="break-all">{`${process.env.NEXT_PUBLIC_API_URL}/${url.short}`}</span>
                      <Button
                        onClick={() =>
                          handleCopy(
                            `${process.env.NEXT_PUBLIC_API_URL}/${url.short}`
                          )
                        }
                        className="shrink-0 p-1.5 hover:bg-gray-200 rounded outline-none transition-colors cursor-pointer"
                        title="Copy to clipboard"
                        variant="ghost"
                        size="sm"
                      >
                        {copiedUrl ===
                        `${process.env.NEXT_PUBLIC_API_URL}/${url.short}` ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 text-green-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 text-gray-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                            />
                          </svg>
                        )}
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {urlList.length === 0 && !isLoading && (
        <div className="w-full flex items-center justify-center">
          <p className="text-gray-500">No URLs found</p>
        </div>
      )}

      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Loader size="sm" variant="primary" />
        </div>
      )}
    </>
  );
};

export default URLListTable;
