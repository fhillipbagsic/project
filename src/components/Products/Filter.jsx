import style from "./Filter.module.css";

function Filter({ category }) {
  return (
    <>
      <div className="container">
        <div>
          <h2 className={style.filter__label}>{category}</h2>
          <p className={style.filter__result}>
            Showing <span className={style.filter__result_count}>1</span> result
          </p>
        </div>
      </div>
      <div className={style.filter}>
        <div className="container">
          <div className={style.filter__buttons}>
            <div className={style.filter__buttons_sort}>
              <p>Sort by</p>
              <button className={style.filter__buttons_selected}>Recent</button>
              <button>Price</button>
            </div>
            <div className={style.filter__buttons_paginate}>
              <p>1 / 1</p>
              <button>&lt;</button>
              <button>&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
