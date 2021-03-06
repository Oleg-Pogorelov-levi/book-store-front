import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getAuthor } from "../../store/actions/actionCreators";
import classes from "./Author.module.css";

function Author(props) {
  const { author, getAuthor } = props;
  const idAuthor = +props.match.params.author.split("_")[1];

  useEffect(() => {
    getAuthor(idAuthor);
  }, [getAuthor, idAuthor]);

  return (
    <div className={classes.main}>
      <div className={classes.img_wrapper}>
        <img
          className={classes.img}
          src={`${process.env.REACT_APP_BASE_URL}${author.img}`}
          alt="Oops!"
        />
      </div>
      <div className={classes.info}>
        <p className={classes.author_name}>{author.name}</p>
        <p className={classes.info_discription}>Об авторе: {author.text}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => ({ author: store.author });

const mapDispatchToProps = {
  getAuthor,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Author));
