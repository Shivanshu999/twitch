"use client"
import { onFollow } from '@/actions/follow'
import { Button } from '@/components/ui/button'
import {useTransition } from 'react'
import { toast } from 'sonner';
import { onUnfollow } from '@/actions/follow';
import { onBlock } from '@/actions/block';

interface ActionsProps {
    isFollowing: boolean;
    userId: string
}

export  const Actions = ({isFollowing, userId}: ActionsProps) => {
    const [isPending, startTransition] = useTransition(); 
    
    const handleUnFollow = async () => {
            startTransition(() => {
        onUnfollow(userId)
             .then((data) => toast.success(`You are now Unfollowed ${data.following.username}`))  
             .catch(()=> toast.error("something went wrong")) 
            })
    }
    const handleFollow = async () => {
            startTransition(() => {
        onFollow(userId)
             .then((data) => toast.success(`You are now following ${data.following.username}`))  
             .catch(()=> toast.error("something went wrong")) 
            })
    }

    const onClick = () => {
      if (isFollowing){
        handleUnFollow()
      } else{
        handleFollow()
      }
    }

    const handleBlock = () => {
      startTransition(() => {
        onBlock(userId)
        .then((data) => toast.success(`Blocked the user ${data.blocked.username}`))
        .catch(() => toast.error("Something went wrong"))
      })
    }
    


  return (
    <>
    <Button  variant="primary" onClick={onClick} disabled={isPending} >
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
    <Button onClick={handleBlock} disabled={isPending}>
      Block
    </Button>
    </>
  )
}

  