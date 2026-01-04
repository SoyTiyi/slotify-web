# Slotify — Appointment Scheduling SaaS (Landing + Admin App)

Slotify is a **multi-tenant appointment scheduling SaaS** for businesses that book sessions (barbershops, beauty salons, clinics, classes, workshops, etc.).  
It lets owners **configure services and staff**, define **working hours and availability**, and accept **online bookings**, with an admin dashboard to manage everything.

> Current status: **only the Landing Page is implemented** (React + Bun).  
> The **admin/management app** will be built with **Next.js**.

---

## What the SaaS will do

### For businesses (Owner/Staff)
- Create and manage **services** (duration, price, buffers).
- Manage **staff members** and service assignments.
- Configure **weekly schedules**, **breaks**, and **date exceptions** (closed days / special hours).
- View bookings in an **admin calendar** (day/week) with filters by staff and status.
- Manage booking lifecycle: **confirmed, cancelled, no-show**, etc.
- Configure business policies (slot interval, cancellation window, timezone).
- (Optional) Send **email notifications** (confirmation + reminders).

### For customers
- Browse **real-time availability** by date/time.
- Book an appointment through a simple flow: service → staff (optional) → date/time → details → confirmation.
- Receive booking confirmation (and reminders if enabled).

---

## Repository structure (current + planned)

> This is the target structure. Right now, only the landing exists.

```
apps/
  landing/        # ✅ React + Bun (current)
  dashboard/      # ⏳ Next.js (planned: admin/management app)
  api/            # ⏳ Backend API (planned)
packages/
  ui/             # ⏳ Shared UI components (planned)
  config/         # ⏳ Shared ESLint/TS configs (planned)
```

---

## Tech stack

### Landing (current)
- **Bun** (runtime + dev server)
- **React**
- **TailwindCSS**

### Admin app (planned)
- **Next.js** (private admin dashboard)
- UI component library (TBD)
- API integration + authentication

### Backend (planned)
- REST API with **multi-tenancy** (organizations)
- **PostgreSQL** + migrations
- Authentication + role-based access (OWNER/STAFF)
- Availability & booking rules with **anti-overbooking** protection

---

## Getting started (Landing)

### Install dependencies
```bash
bun install
```

### Start development server
```bash
bun dev
```

### Run in production
```bash
bun start
```

> This project was created using `bun init` in Bun v1.3.5.  
> Bun is a fast all-in-one JavaScript runtime: https://bun.com

---

## Roadmap (high level)

### MVP — Booking + Admin
- [ ] Auth (register/login)
- [ ] Organizations (multi-tenant)
- [ ] Services
- [ ] Staff + schedules/breaks/exceptions
- [ ] Availability (slot generation)
- [ ] Create booking (anti-overbooking)
- [ ] Admin: bookings list + day/week calendar
- [ ] Settings (timezone, slot interval, cancellation policy)

### Iterations
- [ ] Notifications (confirmation + reminders)
- [ ] Audit log (who changed what)
- [ ] Deployment + monitoring + backups
- [ ] Payments (if applicable)

---

## Key technical principles (for this project)
- **Multi-tenant by design**: every entity belongs to an organization (`organizationId`)
- **Timezones**: store timestamps in **UTC**, display in the business timezone
- **Concurrency safety**: prevent double-booking (transactions/constraints)
- **RBAC**: OWNER vs STAFF permissions on both API and UI
- **Observability**: structured logging + consistent error responses

---

## Contributing
If you want to contribute:
1. Create a branch: `feat/your-change`
2. Open a PR with a clear description, screenshots (if relevant), and testing notes.

---

## License
TBD.
