var applicationKey = 'b668c00a6d06197fb3fed63f78169471550c16515fe0f550edec345baae03c8e';
var clientKey = 'afdd2791cfe1f663cf4ac497031574266c0636b002b472047afa9e27a33e462b';

// SDK初期化
var ncmb = new NCMB(b668c00a6d06197fb3fed63f78169471550c16515fe0f550edec345baae03c8e, afdd2791cfe1f663cf4ac497031574266c0636b002b472047afa9e27a33e462b);

    ons.ready(function() {
      console.log("Onsen UI is ready!");
    });

    // document.addEventListener('show', function(event) {
    //   var page = event.target;
    //   var titleElement = document.querySelector('#toolbar-title');
    //   titleElement.innerHTML = "Camper's Connect";
    //   });

    if (ons.platform.isIPhoneX()) {
      document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
      document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
    }

    //現在地
    function editSelects(event) {
      document.getElementById('pref_name').removeAttribute('modifier');
      if (event.target.value == 'material' || event.target.value == 'underbar') {
        document.getElementById('pref_name').setAttribute('modifier', event.target.value);
      }
    }
    function addOption(event) {
      const option = document.createElement('option');
      var text = document.getElementById('optionLabel').value;
      option.innerText = text;
      text = '';
      document.getElementById('dynamic-sel').appendChild(option);
  }
