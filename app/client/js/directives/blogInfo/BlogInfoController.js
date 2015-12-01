class BlogInfoController {
  static $inject = ['$scope'];
  
  constructor($scope) {
    this.data = $scope.blog = {};
    
    this.data.name = 'My blog';
    this.data.authors = ['Talysson'];
    
    this.data.getName = () => {
        return this.data.name;
    };
  }
}

export default BlogInfoController;