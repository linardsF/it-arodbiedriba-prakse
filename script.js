import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://rarwxukfpxhlqjiqjqjt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhcnd4dWtmcHhobHFqaXFqcWp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyMDg0NTksImV4cCI6MjA3OTc4NDQ1OX0.Y38-xgmx0fNq25LxGAMaeOKmzElJCWeBf3J0L080GCQ";

const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchTasks() {
    const result = await supabase
        .from("tasks")
        .select("*");

    if (result.error) {
        console.error("Kļūda:", result.error);
        document.getElementById("tasks").innerText = "Neizdevās ielādēt datus.";
        return;
    }

    const tasksDiv = document.getElementById("tasks");
    tasksDiv.innerHTML = "";

    result.data.forEach(task => {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task-card";

        const title = document.createElement("h3");
        title.innerText = task.name;

        const desc = document.createElement("p");
        desc.innerText = "Apraksts: " + task.description;

        const status = document.createElement("p");
        status.innerText = "Statuss: " + task.status;

        taskDiv.appendChild(title);
        taskDiv.appendChild(desc);
        taskDiv.appendChild(status);

        tasksDiv.appendChild(taskDiv);
    });
}

fetchTasks();
