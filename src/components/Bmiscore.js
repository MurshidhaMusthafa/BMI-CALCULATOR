function Bmiscore({ bmiNo, bmiName }) {
  return (
    <div className="text-center shadow rounded p-4">
      <div> Your BMI Score</div>
      <div class="row justify-content-md-center">
        <div className="p-3 my-2 alert fs-1 alert-primary col-sm-4">
          {bmiNo}
        </div>
      </div>
      <div className="fs-3 fw-bold text-primary">{bmiName}</div>
    </div>
  );
}

export default Bmiscore;
