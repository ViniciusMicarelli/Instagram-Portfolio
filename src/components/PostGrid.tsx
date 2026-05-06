import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

import profilePhoto from "@/assets/vini.jpeg";

const PostGrid = () => {
  const location = useLocation();
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const postImages = t.postData.map(post => post.image);
    [...postImages, profilePhoto].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [t.postData]);

  return (
    <div className="grid grid-cols-3 gap-0.5">
      {t.postData.map((post, i) => (
        <Link
          key={i}
          to={`/p/${i}`}
          state={{ background: location }}
          className="aspect-square overflow-hidden block"
        >
          <img
            src={post.image}
            alt={`Post ${i + 1}`}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </Link>
      ))}
    </div>
  );
};

export default PostGrid;
