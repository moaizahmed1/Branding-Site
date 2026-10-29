// Writes clearly-fake demo enquiries into .data/submissions.json so you can
// preview the admin dashboard locally. Never run this against real data.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

const dir = process.env.DATA_DIR ?? path.join(process.cwd(), ".data");
const ago = (h) => new Date(Date.now() - h * 3600_000).toISOString();
const rows = [
  ["Marcus Bell", "marcus.bell@example.com", "Midfielder", "Academy", "Blueprint Plus", "I'm 17 and at an academy. Coach says I need to improve my weaker foot. Would love a full video breakdown of my last three matches.", "new", 0.4],
  ["Aisha Rahman", "aisha.r@example.com", "Forward", "Semi-professional", "Blueprint Elite", "Looking for ongoing support and coaching ahead of trials in the new year. Can you tell me how the progress reviews work?", "new", 3],
  ["Tom Hartley", "t.hartley@example.com", "Goalkeeper", "Grassroots", "Blueprint", "My son plays in goal for his Sunday league team (age 14). Is the Blueprint suitable for younger players?", "in_progress", 27],
  ["Jordan Ellis", "jordan.ellis@example.com", "Winger", "Professional", "Player Mentoring / Representation", "Currently out of contract and exploring representation. Interested in a conversation.", "in_progress", 52],
  ["Priya Nair", "priya.nair@example.com", "Defender", "Academy", "Camps & Clinics", "When is the next camp and how many places are available?", "resolved", 120],
  ["Luca Moretti", "luca@example.com", "", "", "General enquiry", "Partnership enquiry — we run a youth coaching programme and would like to talk about working together.", "resolved", 200],
  ["Sam Okoro", "sam.okoro@example.com", "Midfielder", "Grassroots", "1-to-1 Coaching", "", "archived", 400],
];
const items = rows.map(([name, email, position, level, interest, message, status, h]) => ({
  id: randomUUID(), createdAt: ago(h), name, email, position, level, interest, message, status,
  notes: status === "in_progress" ? "Sent pricing. Follow up Friday." : "",
}));
await mkdir(dir, { recursive: true });
await writeFile(path.join(dir, "submissions.json"), JSON.stringify(items, null, 2));
console.log(`Wrote ${items.length} demo enquiries to ${dir}/submissions.json`);
