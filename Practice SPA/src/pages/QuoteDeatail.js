import { useEffect } from "react";
import { useParams, useRouteMatch, Route, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest, params.quoteId]);

  const match = useRouteMatch();
  if(status==="pending"){
    return(
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    )
  }
  if(error){
    return(
      <p>{error}</p>
    )
  }
  if (!loadedQuote.text) {
    return <p>No Quote Found!</p>;
  }
  return (
    <>
      <h1>Quote Detail</h1>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <Link
          className="btn--flat centered"
          to={`/quotes/${params.quoteId}/comments`}
        >
          Show Comments
        </Link>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </>
  );
};

export default QuoteDetail;
