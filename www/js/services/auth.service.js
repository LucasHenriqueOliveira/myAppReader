(function() {
  'use strict';

  angular
    .module('myAppReader')
    .factory('AuthService', AuthService);

  AuthService.$inject = ['$localstorage', '$location', '$http'];

  function AuthService($localstorage, $location, $http) {
    return {
      login: function(user) {
        var urlPost = "http://www.snack4me.com/global/customer.php";
        var formData = { email: user.email, password: user.password };
        formData = mergeDeviceInfo(formData);
        var params = snack4meLib.toQueryString(formData);

        return $http.post(urlPost, params,
          { headers: {'Content-Type': 'application/x-www-form-urlencoded'} }
        )
          .then(function(response) {
            if(response.data.error === false) {
              $localstorage.set('userId', response.data.response.id);
              $localstorage.set('userName', response.data.response.name);
              $localstorage.set('authToken', response.data.response.XSRF);
              $localstorage.set('uuid', formData.uuid);
            }
            return response;
          });
      },

      isLogged: function() {
        return ($localstorage.get('userId') && $localstorage.get('userName') && $localstorage.get('authToken'));
      },

      logout: function(callback) {
        $localstorage.remove('userId');
        $localstorage.remove('userName');
        $localstorage.remove('authToken');
        $localstorage.remove('uuid');
      },

      getUserId: function() {
        return $localstorage.get('userId');
      },

      getToken: function() {
        return $localstorage.get('authToken');
      },

      getUUID: function() {
        return $localstorage.get('uuid');
      },

      getUserName: function() {
        return $localstorage.get('userName');
      }
    }
  }
})();
