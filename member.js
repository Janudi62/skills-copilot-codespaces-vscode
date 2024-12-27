function skillsMember() {
  // function body
  return{
    restrict: 'E',
    templateUrl: 'app/components/member/member.html',
    controller: 'MemberCtrl',
    controllerAs: 'memberCtrl',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}