document.addEventListener("DOMContentLoaded", function () {
  // Fetch and display database ID
  fetch("../api/get_student_id.php")
    .then((response) => response.json())
    .then((data) => {
      if (data.student_id) {
        document.getElementById("databaseID").textContent = data.student_id;
      }
    })
    .catch((error) => console.error("Error fetching student ID:", error));
});

// View Exam Schedule
function viewExamSchedule() {
  alert("Upcoming Exam: ICT Olympiad - 15th March 2025, 10:00 AM");
}

// Participate in Exam
function participateExam() {
  let examTime = new Date("2025-03-15T10:00:00"); // Exam scheduled time
  let currentTime = new Date();

  if (currentTime >= examTime) {
    alert("Redirecting to the exam portal...");
    window.location.href = "exam-portal.html";
  } else {
    alert("The exam is not yet available. Please wait for the scheduled time.");
  }
}

// Make Payment
function makePayment() {
  alert("Redirecting to payment gateway...");
  window.location.href = "payment.html";
}

// View Results
function viewResults() {
  alert("Redirecting to results page...");
  window.location.href = "results.html";
}

// Logout functionality
function logout() {
  // Clear session or token
  localStorage.removeItem("studentToken"); // Adjust based on how the session is managed

  // Redirect to login page
  window.location.href = "../login-studs/login.html"; // Adjust the path as necessary
}
