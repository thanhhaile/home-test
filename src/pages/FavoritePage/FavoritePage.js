import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";
import DisplayList from "../../components/DisplayList/DisplayList";
import { values } from "../../utils/ObjectToArray";

import styles from "./FavoritePage.module.css";

const FavoritePage = () => {
  const context = useContext(AppContext);

  return (
    <div className={styles.favoritePage}>
      {values(context.like).length ? (
        <DisplayList items={values(context.like)} />
      ) : (
        <h3>Let's like some images!</h3>
      )}
    </div>
  );
};

export default FavoritePage;
