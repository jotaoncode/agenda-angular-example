/**
 * Welcome Controller
 */
const WelcomeCtrl = ($scope) => {
  $scope.startAnimation = () => {
    const ryuReady = document.getElementsByClassName('ryu-ready')[0];
    const ryuHadouken = document.getElementsByClassName('ryu-throwing-hadouken')[0];
    const hadouken = document.getElementsByClassName('hadouken')[0];
    const ryuCool = document.getElementsByClassName('ryu-cool')[0];
    const box = document.getElementsByClassName('box')[0];
    const welcome = document.getElementsByClassName('welcome')[0];

    ryuReady.className = 'ryu-ready stop';
    ryuHadouken.className = 'ryu-throwing-hadouken play';
    window.setTimeout(() => {
      hadouken.className = "hadouken play";
      window.setTimeout(() => {
        ryuHadouken.className = 'ryu-throwing-hadouken stop';
        ryuReady.className = 'ryu-ready start';
        hadouken.className = "hadouken play to-box";
        window.setTimeout(() => {
          ryuReady.className = 'ryu-ready stop';
          ryuCool.className = 'ryu-cool play';
          box.style.display = 'none';
          hadouken.className = "hadouken stop";
          welcome.className = 'welcome md-whiteframe-6dp animate-welcome'; //
        }, 500)
      }, 100);
    }, 100);
  }
}
App.controller('WelcomeCtrl', ['$scope', WelcomeCtrl]);

export default WelcomeCtrl;
