import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm"
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const NewQuotes = () => {
    const {sendRequest, status} = useHttp(addQuote);
    const history = useHistory();
    useEffect(()=>{
        if(status === "completed")
        history.push("/quotes");
    },[status,history]);
    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData);
    }
    return (
        <QuoteForm onAddQuote = {addQuoteHandler}/>
    )
}

export default NewQuotes;