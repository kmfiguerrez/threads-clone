'use client'

import { useForm }  from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserValidation, UserData } from '@/lib/validations/user'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface AccountProfileProps {
  user: {
    _id: string
    objectId: string
    username: string
    name: string
    bio: string
    image: string
  }
  btnTitle: string
}

const AccountProfile = ({ user, btnTitle}: AccountProfileProps) => {
  const {register, handleSubmit, formState: {errors}} = useForm<UserData>({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profilePhoto: '',
      name: '',
      username: '',
      bio: '',
    }
  })
  
  // If validations passed this func will be called.
  // The handleSubmit is going to pass the data of type UserData
  // to onSubmit func.
  const onSubmit = ((data: UserData) => console.log(data))
  return (
    <div>
      <Form>

      </Form>
    </div>
  )
}

export default AccountProfile