var iframe = document.getElementById("myIframe");
//       var iframe_height = "auto";
      function changeStuff(iframe_color,iframe_height) {
        const doc = iframe.contentWindow;
        const obj = { background: iframe_color };
        setTimeout(() => {
          doc.postMessage(obj, "*");
        }, 100);

        if (iframe_height == "auto") {
          window.addEventListener(
            "message",
            function (e) {
              iframe.style.height = e.data.height;
            },
            false
          );
        } else {
          iframe.style.height = iframe_height;
        }
      }
