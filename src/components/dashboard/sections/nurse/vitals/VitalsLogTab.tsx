
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Calendar } from '@/components/ui/calendar';
import { SearchIcon, Download, Plus } from 'lucide-react';
import { vitalsLogEntries } from './vitalsData';

interface VitalsLogTabProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

const VitalsLogTab: React.FC<VitalsLogTabProps> = ({ date, setDate }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg">Vitals Log Entries</CardTitle>
            <CardDescription>
              Recent vital sign measurements recorded by staff or clients
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search logs..." 
                className="pl-8 pr-4 py-2 border rounded-md w-48" 
              />
              <SearchIcon className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="border rounded-md"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Heart Rate</TableHead>
                <TableHead>Blood Pressure</TableHead>
                <TableHead>Temperature</TableHead>
                <TableHead>O2 Sat</TableHead>
                <TableHead>Glucose</TableHead>
                <TableHead>Notes</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vitalsLogEntries.map(entry => (
                <TableRow key={entry.id}>
                  <TableCell>{entry.client}</TableCell>
                  <TableCell>
                    <div>{entry.date}</div>
                    <div className="text-xs text-gray-500">{entry.time}</div>
                  </TableCell>
                  <TableCell>{entry.heartRate} bpm</TableCell>
                  <TableCell>{entry.bp}</TableCell>
                  <TableCell>{entry.temp}</TableCell>
                  <TableCell>{entry.o2}</TableCell>
                  <TableCell>{entry.glucose}</TableCell>
                  <TableCell className="max-w-[200px] truncate" title={entry.notes}>{entry.notes}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" className="gap-1">
          <Download className="h-4 w-4" />
          Export Log
        </Button>
        <Button size="sm" className="gap-1">
          <Plus className="h-4 w-4" />
          Add Entry
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VitalsLogTab;
