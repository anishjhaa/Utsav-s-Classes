// function Items({ todoWork, todoDue }) {
// function Items(props) {
//   return (
//     <div class="container text-center">
//       <div class="row">
//         <div class="col-6">{props.todoWork}</div>
//         <div class="col-4">{props.todoDue}</div>
//         <div class="col-2">
//           <button type="button" class="btn btn-danger">
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
function Items(props) {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">{props.todoWork}</div>
        <div class="col-4">{props.todoDue}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Items;
