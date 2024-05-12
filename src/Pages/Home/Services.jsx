import React from "react";

function Services(props) {
  return <article>{props.data?.map(props.children)}</article>;
}

export { Services };
