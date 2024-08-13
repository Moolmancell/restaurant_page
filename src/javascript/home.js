export function home() {
    const content = document.getElementById("content");
    content.innerHTML = ""

    

    const landing = document.createElement("section");
    landing.classList.add("landing")
    
    const heading = document.createElement("h1");
    heading.classList.add("inter-bold");
    heading.textContent = "Every Bite That Counts";
    landing.appendChild(heading);


    const para = document.createElement("p");
    para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec sodales ligula, vel auctor nisi. Integer id massa eget tortor.";
    landing.appendChild(para);

    const button = document.createElement("a");
    button.href = "#";
    button.textContent = "Order Now";
    landing.appendChild(button);

    content.appendChild(landing);
}