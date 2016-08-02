export function CompareToDirective($parse) {
  'ngInject'
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ngModel){
      const mainModel = $parse(attrs.compareTo);
      const secondModel = $parse(attrs.ngModel);
    }

  }
}
