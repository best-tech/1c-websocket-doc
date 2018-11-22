
function fireOnReady() {

    var footer = document.getElementsByTagName("footer")[0];
    var newElement = '<div id="vk_comments"></div>';
    
    footer.innerHTML = newElement+footer.innerHTML;    
    VK.Widgets.Comments("vk_comments", {limit: 20, attach: false});
}

if (document.readyState === 'complete') {
    fireOnReady();
} else {
    document.addEventListener("DOMContentLoaded", fireOnReady);
}

