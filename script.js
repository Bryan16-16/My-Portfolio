//Animation through container
// document.addEventListener("DOMContentLoaded", function () {
//     const con = document.querySelectorAll(".container");

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             entry.target.classList.toggle("show", entry.isIntersecting)
//             if (entry.isIntersecting) observer.unobserve(entry.target)
//         });
//     }, {
//         threshold: 0, // Add your desired threshold here (0.5 for 50% of the element in the viewport)
//     });

//     con.forEach(con => {
//         observer.observe(con);
//     });
// });


// https://www.youtube.com/watch?v=2IbRtjez6ag
// show1

document.addEventListener("DOMContentLoaded", function () {
    const con = document.querySelectorAll(".show1");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show2", entry.isIntersecting)
            if (entry.isIntersecting) observer.unobserve(entry.target)
        });
    }, {
        threshold: 0.3, // Add your desired threshold here (0.5 for 50% of the element in the viewport)
    });

    con.forEach(con => {
        observer.observe(con);
    });
});