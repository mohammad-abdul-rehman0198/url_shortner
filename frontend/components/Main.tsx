"use client";

import { useState } from "react";

import ShortURLForm from "@/components/ShortURLForm";
import URLListTable from "@/components/URLListTable";
import ShortURLDisplay from "@/components/ShortURLDisplay";
import { ShortenedUrl } from "@/utils/interface/ShortenedURL";

const Main = () => {
  const [urlList, setUrlList] = useState<ShortenedUrl[]>([]);
  const [latestShortUrl, setLatestShortUrl] = useState<string>("");
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const handleCopy = async (url: string) => {
    await navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-10">
      <div className="w-full max-w-4xl space-y-8">
        <ShortURLForm
          urlList={urlList}
          setUrlList={setUrlList}
          setLatestShortUrl={setLatestShortUrl}
        />
        <ShortURLDisplay
          latestShortUrl={latestShortUrl}
          copiedUrl={copiedUrl}
          handleCopy={handleCopy}
        />
        <URLListTable urlList={urlList} setUrlList={setUrlList} copiedUrl={copiedUrl} handleCopy={handleCopy} />
      </div>
    </div>
  );
};

export default Main;
