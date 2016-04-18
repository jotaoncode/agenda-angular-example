const Grid = () => {
  return {
    templateUrl: './directives/grid.html',
    scope: {
      options: '='
    },
    restrict: 'E'
  }
}

App.directive('simpleGrid', [Grid]);

export default Grid;
