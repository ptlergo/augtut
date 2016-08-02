export function CompareToDirective($parse) {
  'ngInject'
  return {
    require: 'ngModel',
    link: (scope, elm, attrs, ngModel) => {
      const mainModel = $parse(attrs.compareTo);
      const secondModel = $parse(attrs.ngModel);

      //watch for changes to models then compare validity
      scope.$watch(attrs.ngModel, (newValue) => {
        ngModel.$setValidity(attrs.name, newValue === mainModel(scope));
      })
    }

  }
}
