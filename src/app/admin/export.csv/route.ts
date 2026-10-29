import { isAdmin } from "@/lib/admin-auth";
import { list, STATUS_LABEL } from "@/lib/submissions";

export const dynamic = "force-dynamic";

/** Neutralise spreadsheet formula injection and quote for CSV. */
function cell(value: string) {
  const safe = /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
  return `"${safe.replace(/"/g, '""')}"`;
}

export async function GET() {
  if (!(await isAdmin())) return new Response("Unauthorized", { status: 401 });

  const rows = await list();
  const header = ["Received", "Name", "Email", "Interest", "Position", "Level", "Status", "Message", "Notes"];
  const lines = [
    header.map(cell).join(","),
    ...rows.map((r) =>
      [
        r.createdAt,
        r.name,
        r.email,
        r.interest,
        r.position,
        r.level,
        STATUS_LABEL[r.status],
        r.message,
        r.notes,
      ]
        .map(cell)
        .join(","),
    ),
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="blueprint-enquiries-${new Date().toISOString().slice(0, 10)}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
