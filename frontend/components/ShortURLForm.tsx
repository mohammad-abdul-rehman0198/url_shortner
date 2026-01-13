"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";

import Input from "@/components/ui/inputs/Input";
import { UrlData } from "@/utils/interface/UrlData";
import Button from "@/components/ui/buttons/Button";
import { ShortenedUrl } from "@/utils/interface/ShortenedURL";
import { createShortUrl } from "@/app/actions/url/createShortUrl";
import { generateShortUrl } from "@/utils/actions/GenrateShortURL";
import { inputValidation } from "@/utils/validations/InputValidation";

interface ShortURLProps {
  urlList: ShortenedUrl[];
  setUrlList: (urlList: ShortenedUrl[]) => void;
  setLatestShortUrl: (latestShortUrl: string) => void;
}

const ShortURLForm = ({
  urlList,
  setUrlList,
  setLatestShortUrl,
}: ShortURLProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(inputValidation),
    mode: "onChange",
  });

  const handleSubmitUrl = async (data: UrlData) => {
    const shortUrl = generateShortUrl();
    const newUrl: ShortenedUrl = {
      original: data.url,
      short: shortUrl,
    };
    const response = await createShortUrl(newUrl);
    
    if (response.success) {
      setUrlList([newUrl, ...urlList]);
      setLatestShortUrl(shortUrl);
    }else{
      toast.error(response.message);
    }
    reset();
  };

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(handleSubmitUrl)}
        className="flex items-start gap-2 w-full"
      >
        <div className="flex-1 flex flex-col">
          <Input
            placeholder="Enter your URL"
            {...register("url")}
            className="w-full"
          />
          {errors.url && (
            <p className="text-red-500 mt-1 px-1">{errors.url.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          className="ml-2 cursor-pointer"
          disabled={isSubmitting || !isValid}
          loading={isSubmitting}
        >
          Shorten
        </Button>
      </form>
    </>
  );
};

export default ShortURLForm;
