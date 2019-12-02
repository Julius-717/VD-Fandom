function openPage(evt, pageName) {
    // Get all elements with class="tabcontent" and hide them
    $(".tabcontent").hide();
    // Get all elements with class="tablinks" and remove the class "active"
    $(".tablinks").removeClass(" active");
    $(".tablinks").addClass("");
    // Show the current tab, and add an "active" class to the button that opened the tab
    $('#' + pageName).show();
    $(this).addClass(" active");
    }
    
    