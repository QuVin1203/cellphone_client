import React, { useState } from "react";
import { useSelector } from "react-redux";

function BlogContent(props) {
  const detailProduct = useSelector((state) => state.getProductById.product);//lấy dữ liệu từ redux store
  const [showMoreBlog, setShowMoreBlog] = useState(false);
  const [styleBlog, setStyleBlog] = useState({
    height: "500px",
  });


  return (
    <section id="blog">
      {detailProduct.blog ? (//kiểm tra tồn tại blog
        <div className="blog">
          <div className="blog-content" style={styleBlog}>
            <div dangerouslySetInnerHTML={{ __html: detailProduct.blog }} />

            {showMoreBlog === false ? (//nếu show là false sau ? dc thực thi
              <div
                className="blog-showmore"
                onClick={() => {
                  setStyleBlog({ height: "100%" });
                  setShowMoreBlog(!showMoreBlog);
                }}
              >
                Xem Thêm đánh giá
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default BlogContent;
