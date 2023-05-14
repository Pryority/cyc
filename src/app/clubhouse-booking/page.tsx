import { withAuth } from "@/components/withAuth";
import React from "react";

const ClubhouseBookingPage = () => {
  return (
    <section className="flex flex-col w-full items-center">
      <div className="flex flex-col w-4/5 gap-4">
        <div className="border-b-2 border-gray-300 py-2 mb-4">
          <h2 className="text-4xl tracking-tighter">Clubhouse Booking</h2>
        </div>

        <div className="px-6 py-4 mb-6">
          <p className="text-red-500 font-light tracking-wider mb-4 uppercase">
            Selling liquor at any event requires a liquor permit.
          </p>

          <div className="flex flex-col w-full items-center">
            <p className="mb-4 text-2xl font-medium">Rentals</p>
            <p className="mb-4">
              The clubhouse and its facilities are available to all members and
              visiting overnight boaters.
            </p>

            <div className="p-2 border w-fit rounded bg-stone-50/20">
              <table className="table-auto mb-4">
                <thead>
                  <tr>
                    <th className="px-4 py-2 font-normal"></th>
                    <th className="px-4 py-2 font-normal">Number of People</th>
                    <th className="px-4 py-2 font-normal">Fee</th>
                  </tr>
                </thead>
                <tbody className="bg-slate-50">
                  <tr>
                    <td className="font-light tracking-tight border px-4 py-2">
                      Monthly meetings not using kitchen facilities
                    </td>
                    <td className="border px-4 py-2">-</td>
                    <td className="border px-4 py-2">$20</td>
                  </tr>
                  <tr>
                    <td className="font-light tracking-tight border px-4 py-2">
                      Social events (&lt; 20 people)
                    </td>
                    <td className="border px-4 py-2">&lt; 20</td>
                    <td className="border px-4 py-2">$50</td>
                  </tr>
                  <tr>
                    <td className="font-light tracking-tight border px-4 py-2">
                      Social events (&gt;20 &lt;50 people)
                    </td>
                    <td className="border px-4 py-2">&gt; 20 &lt; 50</td>
                    <td className="border px-4 py-2">$75</td>
                  </tr>
                  <tr>
                    <td className="font-light tracking-tight border px-4 py-2">
                      Social events (&gt;50 &lt;85 people max)
                    </td>
                    <td className="border px-4 py-2">&gt; 50 &lt; 85</td>
                    <td className="border px-4 py-2">$100</td>
                  </tr>
                  <tr>
                    <td className="font-light tracking-tight border px-4 py-2">
                      Events including only CYC members:
                    </td>
                    <td className="border px-4 py-2">-</td>
                    <td className="border px-4 py-2">$0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-amber-50 rounded-lg px-6 py-4 mb-6 mt-8">
            <p className="text-lg font-bold mb-1 uppercase underline decoration-amber-500">
              Members are responsible for clean up after their event.
            </p>
            <p className="mb-4 w-4/5 leading-5">
              If you booked the clubhouse and leave it unclean and did not
              restore it to its normal layout (i.e. kitchen &amp; bathrooms
              clean, furniture away) you can be charged a $25/ hr cleaning fee.
            </p>
            <p className="mb-4 w-4/5 leading-5">
              It is important that the clubhouse be kept in a clean and tidy
              condition. If you use the dishes, glasses or other kitchen items
              please wash them and put them away.
            </p>
            <p className="mb-4">
              Report any breakage or problems with equipment or facilities to
              the clubhouse manager.
            </p>
            <p className="mb-4">
              Excessive use of the facilities by any club member may incur usage
              fees.
            </p>
            <p className="mb-4 leading-5">
              The facilities can be booked for personal or special events.
              Simply fill out the booking request form and submit it to the
              clubhouse manager for approval. A usage fee may apply.
            </p>
          </div>
          <div className="flex flex-col mb-8">
            <p className="font-bold">Director of Social</p>
            <p className="font-medium text-blue-600">Veronica (Ronnie) Vito</p>
            <p>905 713-9266</p>
            <p>social@collingwoodyachtclub.com</p>
          </div>
          <p className="text-red-500 font-light tracking-wider mb-4 uppercase">
            Selling liquor at any event requires a liquor permit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default withAuth(ClubhouseBookingPage);
