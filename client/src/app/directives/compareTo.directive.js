export function CompareToDirective($parse) {
  'ngInject'
  return {
    require: 'ngModel',
    link: (scope, elm, attrs, ngModel) => {
      const mainModel = $parse(attrs.compareTo);
      const secondModel = $parse(attrs.ngModel);

      //watch for changes to original password input model then compare validity
      scope.$watch(attrs.ngModel, (newValue) => {
        ngModel.$setValidity(attrs.name, newValue === mainModel(scope));
      });

      //watch for changes to new password input model then compare validity
      scope.$watch(attrs.compareTo, (newValue) => {
        ngModel.$setValidity(attrs.name, newValue === secondModel(scope));
      });
    }

  }
}
