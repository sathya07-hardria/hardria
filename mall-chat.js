// Toggle chat box visibility
function toggleChatBox() {
  const chatBox = document.getElementById("chatBox");
  chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
}

// Send message from user and get bot response
function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBody = document.getElementById("chatBody");
  const userText = input.value.trim();
  if (!userText) return;

  // User message
  const userMsg = document.createElement("p");
  userMsg.innerHTML = `<strong>You:</strong> ${userText}`;
  chatBody.appendChild(userMsg);

  // Bot response logic
  let botReply = "Sorry, I didn't understand 💙";
  const text = userText.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) botReply = "Hello! Welcome to Super Shopping Mall 🛍️";
  else if (text.includes("offers")) botReply = "Current Offers: 50% off Electronics, B1G1 in Fashion, 30% off Home Appliances.";
  else if (text.includes("timings")) botReply = "Mall Timings: 10 AM - 10 PM, Monday-Sunday.";
  else if (text.includes("food")) botReply = "Food Court: Pizza Hut, McDonald's, KFC, Cafes & Desserts.";
  else if (text.includes("home appliances")) botReply = "Home Appliances Section: 2nd floor, near escalator.";

  // Bot message
  const botMsg = document.createElement("p");
  botMsg.innerHTML = `<strong>Bot:</strong> ${botReply}`;
  chatBody.appendChild(botMsg);

  // Scroll to bottom
  chatBody.scrollTop = chatBody.scrollHeight;

  // Clear input
  input.value = "";
}
