
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
