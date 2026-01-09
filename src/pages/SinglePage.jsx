import React from "react";
import { Link, useParams } from "react-router-dom";
import useGet from "../hooks/useGet";
import SwiperImages from "../components/swiper-images/SwiperImages";

const SinglePage = () => {
  const { id } = useParams("id");
  const { data } = useGet({ url: "products", id: id });
  const singleProduct = data?.data;
  console.log(singleProduct);

  return (
    <section>
      <div className="container  mx-auto px-5">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <SwiperImages images={singleProduct?.images} />
          </div>
          <div>
            <p className="text-[24px] font-[500]">{singleProduct?.title}</p>
            <p className="italic text-gray-500">
              {singleProduct?.description}
            </p>{" "}
            <div className="flex items-center gap-[10px]">
              <p className="text-[24px] font-bold text-gray-600 line-through">
                ${singleProduct?.price}
              </p>{" "}
              <p className="text-[24px] font-bold ">
                $
                {(
                  (singleProduct?.price *
                    (100 - singleProduct?.discountPercentage)) /
                  100
                ).toFixed(2)}
              </p>{" "}
            </div>
            <p>{singleProduct?.title}</p>
            <div className="flex gap-5 flex-wrap mt-3">
              {singleProduct?.tags?.map((el) => (
                <p className="px-[10px] py-[5px] rounded-2xl bg-gray-300">
                  #{el}
                </p>
              ))}
            </div>
            <div className="flex gap-[5px] mt-5 w-full">
              <button className="w-full cursor-pointer py-[10px] text-[18px] font-medium border-2 border-orange-600 bg-orange-600 text-white rounded-2xl">
                Cartga qo'shish
              </button>
              <Link
                className="w-full py-[10px] text-center text-[18px] font-medium border-2 border-orange-600  text-orange-600 rounded-2xl"
                to={"/cart"}
              >
                Sotib olish
              </Link>
            </div>
          </div>
        </div>
        <div>
          {singleProduct?.reviews?.map((el) => (
            <div className="w-full flex flex-col gap-5 border border-[2px] border-gray-500 mt-[20px] p-5">
              <div className="flex justify-between items-center">
                <h1>{el.reviewerName}</h1>
                <a href="">{el.reviewerEmail}</a>
              </div>
              <p>{el.comment}</p>
              <div className="flex justify-between items-center">
                <h1>{el.date}</h1>
                <a href="">{el.rating}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SinglePage;
