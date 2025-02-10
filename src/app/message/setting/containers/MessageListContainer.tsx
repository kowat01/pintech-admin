'use client'
import React from 'react'
import MessageList from '../components/MessageList'
import useMenuCode from '@/app/global/hooks/useMenuCode'

const MessageListContainer = () => {
  useMenuCode('message', 'messageList')

  return <MessageList />
}

export default React.memo(MessageListContainer)