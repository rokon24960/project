"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Users, Crown, CheckCircle, Mail, Phone, User } from "lucide-react"

export default function ReservePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    duration: "",
    tableType: "",
    guests: "",
    specialRequests: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create email content
    const emailSubject = `Table Reservation Request - ${formData.name}`
    const emailBody = `
New Table Reservation Request:

Customer Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Reservation Details:
- Date: ${formData.date}
- Time: ${formData.time}
- Duration: ${formData.duration}
- Table Type: ${formData.tableType}
- Number of Guests: ${formData.guests}
- Special Requests: ${formData.specialRequests || 'None'}

Please contact the customer to confirm this reservation.
    `

    // Create mailto link
    const mailtoLink = `mailto:reservations@elitesnooker.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Show success message
    setIsSubmitted(true)
  }

  const tableTypes = [
    { value: "championship", label: "Championship Table - £25/hour", icon: Crown },
    { value: "vip", label: "VIP Private Suite - £45/hour", icon: Crown },
    { value: "social", label: "Social Table - £15/hour", icon: Users }
  ]

  const timeSlots = [
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30",
    "22:00", "22:30", "23:00", "23:30", "00:00", "00:30", "01:00", "01:30"
  ]

  const durations = ["1 hour", "2 hours", "3 hours", "4 hours", "All day"]

  if (isSubmitted) {
    return (
      <main className="min-h-screen">
        <Navigation />
        
        <section className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Card className="glass-effect professional-border">
                <CardContent className="p-12">
                  <div className="p-4 rounded-full gradient-primary w-fit mx-auto mb-6">
                    <CheckCircle className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h1 className="text-3xl font-bold mb-4 professional-glow text-primary">
                    Reservation Request Sent!
                  </h1>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Your reservation request has been sent to our team. We'll contact you within 
                    24 hours to confirm your booking and provide payment details.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground mb-8">
                    <p>📧 Check your email client for the sent request</p>
                    <p>📞 We'll call you at {formData.phone}</p>
                    <p>⏰ Expected response time: Within 24 hours</p>
                  </div>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="gradient-primary professional-border mr-4"
                  >
                    Make Another Reservation
                  </Button>
                  <Button 
                    variant="outline"
                    className="glass-effect border-secondary/30 text-secondary"
                    onClick={() => window.location.href = '/'}
                  >
                    Back to Home
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/neon-lit-snooker-table-in-dark-nightclub-with-colo.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-full glass-effect">
                <Calendar className="h-12 w-12 text-primary professional-glow" />
              </div>
            </div>
            <h1 className="font-sans text-5xl md:text-6xl font-bold mb-6 professional-glow text-primary">
              Reserve Your Table
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Book your premium snooker experience. Choose your preferred table, time, 
              and let us prepare the perfect evening for you.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect professional-border">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl professional-glow text-primary">
                  Make Your Reservation
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll confirm your booking within 24 hours
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-accent flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input 
                          id="name" 
                          required
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="glass-effect border-border/50 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email"
                          required
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="glass-effect border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        required
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="glass-effect border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Reservation Details */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-accent flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Reservation Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date *</Label>
                        <Input 
                          id="date" 
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => handleInputChange('date', e.target.value)}
                          className="glass-effect border-border/50 focus:border-primary"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Preferred Time *</Label>
                        <Select onValueChange={(value) => handleInputChange('time', value)} required>
                          <SelectTrigger className="glass-effect border-border/50 focus:border-primary">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent className="glass-effect">
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>{time}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="duration">Duration *</Label>
                        <Select onValueChange={(value) => handleInputChange('duration', value)} required>
                          <SelectTrigger className="glass-effect border-border/50 focus:border-primary">
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent className="glass-effect">
                            {durations.map((duration) => (
                              <SelectItem key={duration} value={duration}>{duration}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guests">Number of Guests *</Label>
                        <Select onValueChange={(value) => handleInputChange('guests', value)} required>
                          <SelectTrigger className="glass-effect border-border/50 focus:border-primary">
                            <SelectValue placeholder="Select guests" />
                          </SelectTrigger>
                          <SelectContent className="glass-effect">
                            {[1,2,3,4,5,6,7,8].map((num) => (
                              <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? 'Guest' : 'Guests'}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-2">
                    <Label htmlFor="requests">Special Requests (Optional)</Label>
                    <Textarea 
                      id="requests" 
                      placeholder="Any special requirements or requests..."
                      rows={4}
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      className="glass-effect border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="gradient-primary hover:scale-105 transition-all duration-300 professional-border px-12 py-4 text-lg font-semibold"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      Send Reservation Request
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      We'll contact you within 24 hours to confirm your reservation
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 success-glow text-secondary">Need Help?</h2>
            <p className="text-muted-foreground">Contact us directly for immediate assistance</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="glass-effect professional-border text-center">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-muted-foreground text-sm">+44 20 7123 4567</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect professional-border text-center">
              <CardContent className="p-6">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-muted-foreground text-sm">reservations@elitesnooker.com</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect professional-border text-center">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Opening Hours</h3>
                <p className="text-muted-foreground text-sm">Daily: 2PM - 2AM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}