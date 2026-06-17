"use client"

import * as React from "react"
import { Clock, Bell, Coffee } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const lessonSchedule = [
  { number: 1, start: "08:30", end: "09:15", breakTime: 10 },
  { number: 2, start: "09:25", end: "10:10", breakTime: 20 },
  { number: 3, start: "10:30", end: "11:15", breakTime: 20 },
  { number: 4, start: "11:35", end: "12:20", breakTime: 10 },
  { number: 5, start: "12:30", end: "13:15", breakTime: 10 },
  { number: 6, start: "13:25", end: "14:10", breakTime: 10 },
  { number: 7, start: "14:20", end: "15:05", breakTime: 10 },
  { number: 8, start: "15:15", end: "16:00", breakTime: null },
]

const importantDates = [
  { date: "1 вересня", event: "Перший дзвоник", type: "holiday" },
  { date: "14 жовтня", event: "День захисників України", type: "holiday" },
  { date: "28 жовтня - 5 листопада", event: "Осінні канікули", type: "vacation" },
  { date: "25 грудня - 7 січня", event: "Зимові канікули", type: "vacation" },
  { date: "25 березня - 1 квітня", event: "Весняні канікули", type: "vacation" },
  { date: "31 травня", event: "Останній дзвоник", type: "holiday" },
]

const shifts = [
  { name: "Перша зміна", classes: "1-4, 9-11 класи", time: "08:30 - 14:10" },
  { name: "Друга зміна", classes: "5-8 класи", time: "13:00 - 18:30" },
]

export function Schedule() {
  const [activeTab, setActiveTab] = React.useState<"lessons" | "dates">("lessons")

  return (
    <section id="schedule" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-medium mb-2">Організація навчання</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Розклад та графік
          </h2>
          <p className="text-muted-foreground">
            Режим роботи ліцею та важливі дати навчального року
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-muted rounded-lg p-1">
            <button
              onClick={() => setActiveTab("lessons")}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-colors",
                activeTab === "lessons"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Розклад дзвінків
            </button>
            <button
              onClick={() => setActiveTab("dates")}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-colors",
                activeTab === "dates"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Важливі дати
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "lessons" ? (
            <div className="space-y-8">
              {/* Shifts Info */}
              <div className="grid sm:grid-cols-2 gap-4">
                {shifts.map((shift) => (
                  <Card key={shift.name}>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Bell className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{shift.name}</p>
                        <p className="text-sm text-muted-foreground">{shift.classes}</p>
                        <p className="text-sm text-primary">{shift.time}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Lessons Table */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Розклад уроків (1 зміна)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">№ уроку</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Початок</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Кінець</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Перерва</th>
                        </tr>
                      </thead>
                      <tbody>
                        {lessonSchedule.map((lesson, index) => (
                          <tr 
                            key={lesson.number} 
                            className={cn(
                              "border-b border-border/50 transition-colors hover:bg-muted/50",
                              (index === 1 || index === 2) && "bg-primary/5"
                            )}
                          >
                            <td className="py-3 px-4">
                              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-medium">
                                {lesson.number}
                              </span>
                            </td>
                            <td className="py-3 px-4 font-medium text-foreground">{lesson.start}</td>
                            <td className="py-3 px-4 font-medium text-foreground">{lesson.end}</td>
                            <td className="py-3 px-4">
                              {lesson.breakTime ? (
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  {lesson.breakTime >= 20 && <Coffee className="h-4 w-4 text-amber-500" />}
                                  <span>{lesson.breakTime} хв</span>
                                </div>
                              ) : (
                                <span className="text-muted-foreground">—</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Важливі дати 2025-2026 н.р.</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {importantDates.map((item) => (
                    <div
                      key={item.event}
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-lg transition-colors",
                        item.type === "holiday" ? "bg-primary/10" : "bg-accent/10"
                      )}
                    >
                      <div className={cn(
                        "w-3 h-3 rounded-full flex-shrink-0",
                        item.type === "holiday" ? "bg-primary" : "bg-accent"
                      )} />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground">{item.event}</p>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                      </div>
                      <span className={cn(
                        "text-xs px-3 py-1 rounded-full font-medium",
                        item.type === "holiday" 
                          ? "bg-primary/20 text-primary" 
                          : "bg-accent/20 text-accent-foreground"
                      )}>
                        {item.type === "holiday" ? "Свято" : "Канікули"}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
