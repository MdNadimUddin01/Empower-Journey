import React, { useEffect, useState } from "react";
// import Footer from '../components/common/Footer'
import { useParams } from "react-router-dom";
import { apiConnector } from "../services/apiconnector";
import { catalogData, categories } from "../services/apis";
import { getCatalogaPageData } from "../services/operations/pageAndComponentData";
import Course_Card from "../components/Catalog/Course_Card";
import CourseSlider from "../components/Catalog/CourseSlider";
import { useDispatch } from "react-redux";

const Catalog = () => {
  const Catalog = useParams();
  const [Desc, setDesc] = useState([]);
  const [CatalogPageData, setCatalogPageData] = useState(null);
  const [categoryID, setcategoryID] = useState(null);
  const [activeOption, setActiveOption] = useState(1);
  const [title , setTitle] = useState(Catalog.catalogName);
  const dispatch = useDispatch();


  const fetchSublinks = async () => {
    try {
      // console.log(typeof Catalog.catalogName)
      
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      // console.log("Data : " , result.data.data)
      const categoryInfo = result?.data?.data.filter((item) => {
        console.log(item.name.toLowerCase())
        return item.name.toLowerCase() === (Catalog.catalogName.toLowerCase()).replace('-' , ' ');
      });
      
      console.log("RESULT " ,result)
      console.log("category_id : ", categoryInfo)
      setcategoryID(categoryInfo[0]._id);
      setTitle(categoryInfo[0].name)
      setDesc(
        result?.data?.data.filter(
          (item) =>
            item.name.toLowerCase() === Catalog.catalogName.toLowerCase().replace('-' ,' ')
        )[0]
      );
      console.log("DESC ", Desc);
      // console.log(category_id);
    } catch (error) {
      console.log("could not fetch sublinks");
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSublinks();
  }, [Catalog]);

  useEffect(() => {
    const fetchCatalogPageData = async () => {
      const result = await getCatalogaPageData(categoryID, dispatch);
      console.log("RESULT : ", result);
      setCatalogPageData(result?.data);
      console.log("page data", CatalogPageData);
    };
    if (categoryID) {
      fetchCatalogPageData();
    }
  }, [categoryID]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setShowScrollTop(window.scrollY > 400);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white  mx-auto max-w-7xl">
      <div
        className="fixed  inset-0 z-0 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(59, 130, 246, 0.1) 0%, 
            rgba(99, 102, 241, 0.05) 50%, 
            rgba(255, 255, 255, 0) 100%)`,
        }}
      />
      <div className=" box-content text-sm text-gray-400 px-4">
        <div className="mx-auto flex min-h-[260px]  flex-col justify-center gap-4 ">
          <p className="text-sm ">
            Home / Catalog /{" "}
            <span className="text-white mb-12">
              {title}
            </span>{" "}
          </p>
          <p className="mb-4 text-4xl font-bold text-white ">
            {title}
          </p>
          <p className="max-w-3xl text-lg text-gray-400">{Desc?.description}</p>
        </div>
      </div>

      <div className="space-y-16">
        <div className=" mx-auto box-content w-full max-w-maxContentTab px-2 lg:max-w-maxContent">
          <h2 className="mb-8 text-2xl font-bold text-white">
            Courses to get you started
          </h2>
          <div className="my-4 mb-8 flex border-b border-b-gray-600 text-sm">
            <button
              onClick={() => {
                setActiveOption(1);
              }}
              className={
                activeOption === 1
                  ? `px-4 py-2 border-b border-b-yellow-50 text-yellow-50 cursor-pointer`
                  : `px-4 py-2 text-gray-50 cursor-pointer`
              }
            >
              Most Populer
            </button>
            <button
              onClick={() => {
                setActiveOption(2);
              }}
              className={
                activeOption === 1
                  ? "px-4 py-2 text-gray-50 cursor-pointer"
                  : "px-4 py-2 border-b border-b-yellow-50 text-yellow-50 cursor-pointer"
              }
            >
              New
            </button>
          </div>
          <CourseSlider Courses={CatalogPageData?.selectedCategory?.courses} />
        </div>

        <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
          <h2 className="mb-8 text-2xl font-bold text-white">
            Similar to {Catalog.catalogName}
          </h2>
          <CourseSlider Courses={CatalogPageData?.differentCourses} />
        </div>

        <div className=" mx-auto box-content w-full max-w-maxContentTab px-2 py-12 lg:max-w-maxContent">
          <h2 className="mb-8 text-2xl font-bold text-white">
            Frequently BoughtTogether
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CatalogPageData?.mostSellingCourses?.map((item, index) => (
              <Course_Card
                key={index}
                course={item}
                Height={"h-[100px] lg:h-[400px]"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
