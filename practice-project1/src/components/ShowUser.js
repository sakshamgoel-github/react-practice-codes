const ShowUser = (props) => {
  return (
    <div className="mb-3" style={{borderLeft:"2px solid #A2B5BB",paddingLeft:"2px"}}>
      <h4>{props.user.username}</h4>
      <h6 className="text-muted">{props.user.age}</h6>
    </div>
  );
};

export default ShowUser;
