export default function TomatoBox({ tomatoes }) {
  return (
    <div className="tomato-box">
      <h1>{tomatoes ? tomatoes : "No Tomatoes Yet"}</h1>
    </div>
  );
}
