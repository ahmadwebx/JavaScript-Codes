const checkBtn = document.getElementById("checkBtn");
const holidayList = document.getElementById("holidayList");

checkBtn.addEventListener("click", async() =>{
    const country = document.getElementById("country").value;
    const year = document.getElementById("year").value;

    holidayList.innerHTML = `<li>Loading...</li>`;

    try{
        const res= await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/${country}`);
        if (!res.ok) throw new Error("Error Fecthing Data");

        const holidays = await res.json();

        holidayList.innerHTML = '';
        if(holidays.length === 0){
            hostingList.innerHTML = `<li> No Holiday found for ${country} in  ${year}`;
            return;
        }
        holidays.forEach(holiday => {
            const li = document.createElement("li");
            li.textContent = `${holiday.localName} - ${holiday.date}`;
            holidayList.appendChild(li);
        });
    } catch(err){
        holidayList.innerHTML = `<li> Error: ${err.message} <?/li>`
    }
})
