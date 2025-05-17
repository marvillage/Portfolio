"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })
      form.reset()
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#00cfff]">Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  {...field}
                  className="bg-white/5 border-[#00cfff]/20 focus-visible:ring-[#00cfff]"
                />
              </FormControl>
              <FormMessage className="text-[#ff004c]" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#00cfff]">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your email"
                  type="email"
                  {...field}
                  className="bg-white/5 border-[#00cfff]/20 focus-visible:ring-[#00cfff]"
                />
              </FormControl>
              <FormMessage className="text-[#ff004c]" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#00cfff]">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message"
                  {...field}
                  className="bg-white/5 border-[#00cfff]/20 focus-visible:ring-[#00cfff] min-h-[120px]"
                />
              </FormControl>
              <FormMessage className="text-[#ff004c]" />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting} className="w-full bg-[#ff004c] hover:bg-[#ff004c]/80 text-white">
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </span>
          )}
        </Button>
      </form>
    </Form>
  )
}
