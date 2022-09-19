import { Link } from "react-router-dom";

export default function HighlightSession(props) {
  const banner_color = ["bg-danger", "bg-primary"];

  return (
    <div className="row py-4 hover-shadow align-items-center">
      <div className="col-sm-12 col-md-6 mb-4">
        <span
          className={`fw-black fs-1 text-white p-2 shadow
                ${banner_color[props.highlightItem.tag_color]}
                `}
        >
          {props.highlightItem.tag}
        </span>
        <p className="fs-5 my-4 fw-light">{props.highlightItem.description}</p>
        <Link
          to={`/product/${props.highlightItem.id}`}
          className="btn btn-md btn-success rounded-0"
        >
          Check it here!
        </Link>
      </div>
      <div className="col-sm-12 col-md-6">
        <img
          src={"img/" + props.highlightItem.img_name}
          alt={props.highlightItem.name}
          title={props.highlightItem.name}
          className="img-thumbnail rounded-0"
        />
      </div>
    </div>
  );
}
