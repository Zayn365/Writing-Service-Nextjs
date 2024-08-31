'use client'
import { useRouter } from "next/navigation";
import Button from '@/components/admin/Button'
import Header from '@/components/admin/Header'
import InputField from '@/components/admin/InputField'
import Textarea from '@/components/admin/Textarea'
import Link from 'next/link'

const Page = () => {
    const router = useRouter();

    return (
        <div className='w-full'>
            <Header text={"User Articles Requested - Ebook Writing Service"} />
            <div className='border rounded-lg bg-light-blue-800 p-2'>
                <p className='font-semibold text-white text-wrap'>
                    Child's Anger Management : 10 simple & effective methods to help your kid manage emotions and become relax   10000 words   $250.00
                </p>
            </div>
            <div className="w-full  my-2">
                <div className='w-full flex justify-center items-center border p-2'>
                    <span className='font-semibold w-full'>
                        Writing Type
                    </span>
                    <span className='w-full' >
                        Brand new book
                    </span>
                </div>
                <div className='w-full flex justify-center items-center border p-2'>
                    <span className='font-semibold w-full'>
                        price Type
                    </span>
                    <span className='w-full' >
                        Writing and eiditing
                    </span>
                </div>

            </div>
            <div className="w-full flex flex-col justify-start items-start gap-y-3">
                <b>
                    Description
                </b>
                <p>
                    Hello,
                </p>
                <p>
                    You will find below the summary of my book. Please complete and expand it. Is the title ok?
                </p>
                <p className='font-semibold text-red-700'>
                    Child's Anger Management : 10 simple & effective methods to help your kid manage emotions and become relax
                </p>
                <div>

                    <b>
                        What is child's anger
                    </b>
                    <p>
                        The reason for children's anger is not bad parenting, but emotional immaturity. Until about 4.5-5 years of age, a child is physiologically unable to control his or her emotions, and full control only matures by the age of 12-13. Until then, part of the control lies on the parents. It is not comforting, but it gives us an opportunity to tolerate children's breakdowns.

                    </p>
                </div>
                <div>
                    <b>
                        Reasons of child's anger
                    </b>
                    <p>
                        Children's anger arises for very natural reasons: <br />
                        - Functional immaturity of emotion regulation. <br />
                        - Very high fatigue and dependence on physical condition. <br />
                        - Lack of words to express feelings. <br />
                    </p>
                </div>
                <div>
                    <b>
                        How to behave during child aggression outbursts?
                    </b>
                    <p>
                        The most important and most difficult thing is to remain calm. It does not matter how what happens looks from the outside. Our task is to become an "airbag" for the child. We only see the reaction, but we need to understand what is happening to the child and help him calm down.Who is to blame? No matter what happens, parents need to stay on the child's side. If other adults complain about him, you can't join them. It's difficult, it's not accepted in our culture, but if we want to maintain a trusting relationship with our child, it's important to be with them not only when they're nice. That doesn't mean approving of misbehavior, it means not emotionally crossing over to the other side. If parents join in blaming, the child perceives it as a betrayal.
                    </p>
                </div>
                <div>
                    <b>
                        When to talk to the child, so that he hears?
                    </b>
                    <p>
                        Any educational conversations are possible only when the child is in an adequate state. You should not shame and teach during a tantrum or a conflict - it is useless and extremely tiresome. Any parenting is only possible at a neutral time when everyone is calm and friendly.                    </p>
                </div>
                <div>
                    <b>
                        Does your child have anger issues?
                    </b>
                    <p>

                        Everyone experiences anger, including children. And it's normal. But some people can't handle their anger. Let's look at a few signs that may indicate that a child has anger issues: <br />
                        A child often loses his temper over the slightest thing;<br />
                        a child loses self-control, can not stop during an angry outburst; <br />
                        a child can not coherently express his feelings;<br />
                        a child does not notice how their anger affects other people. From the outside it seems that he does not care about the feelings of others; <br />
                        the child behaves recklessly;<br />
                        the child uses threats in speech. His drawings and writings have themes of violence and aggression; <br />
                        The child says that others are to blame for his/her aggressive behavior; <br />
                        The child becomes angry over a long period of time;<br />
                        The child only begins to control his/her behavior after being yelled at and scolded.
                    </p>
                </div>
                <b>
                    10 METHODS:
                </b>
                <div>
                    <b>
                        1. take a pause
                    </b>
                    <p>
                        Pauses always help when a child is angry. When he has an angry outburst, don't react or scold him. This will only increase his anger. Instead of arguing or talking to him in high tones, do the following: wait until your child is finished and then take him to his room. Tell him as calmly as possible that he needs to spend some time in his room to calm down.                    </p>
                    <b>
                        2.Learn a Vocabulary of Feelings
                    </b>
                    <p>
                        When young children are angry, they usually yell, fight, and throw things because they don't know how to express their anger in words. A feelings dictionary is a list of words a child can use to express his or her emotions. Teach him words that represent the emotion.
                    </p>
                    <b>
                        3. Give release to anger
                    </b>
                    <p>
                        The amygdala, a part of the brain that is also responsible for the body's "fight or flight" response, is responsible for feelings of anger. As soon as a person experiences anger, adrenal glands release adrenaline, testosterone levels in the body rise, and heart rate and blood pressure rise. When adrenaline levels rise in the body, the man feels strong and energetic, and his voice becomes louder. Such changes increase the risk of aggressive behavior. To prevent this, you need to redirect the adrenaline to something more productive and less damaging. For example, you can beat a punching bag, scream into a pillow, take up some kind of sport (like running, swimming or just doing physical exercise). Physical activity is one of the most effective ways for both adults and children to manage anger.
                    </p>
                    <b>
                        4. Empathize with your child
                    </b>
                    <p>
                        Empathy can do wonders when it comes to a child experiencing anger. If your child is angry, encourage him to talk about it. Do not interrupt your child when he expresses his anger. Acknowledge any feelings he has, whether anger, irritation, or otherwise.
                    </p>
                    <p>
                        Show your child that you care about him or her. Often children feel anger when they are disappointed or feel neglected or betrayed. The child may feel that anger is the only way to be heard or taken seriously. Think about what act of yours caused the child to become angry.
                    </p>
                </div>
                <b>
                    5. Praise your child for good behavior
                </b>
                <p>
                    Your child's behavior depends on how you respond to it. Children are always trying to get their parents' attention in any way they can and to get their approval. So when your child shows good behavior, praise him and appreciate his efforts. But don't overdo it. Too much praise can do harm: the child will expect only praise and will not accept criticism.

                </p>
                <b>
                    6. Set a good example for your child.                </b>
                <p>

                    Give your child a good example of how to manage anger and control their emotions. Parents must learn to control their own anger by communicating with each other. If parents can't communicate politely, children aren't likely to learn to do so either. Good communication is an art and must be learned.
                </p>
                <b>
                    7. Set Rules.
                </b>
                <p>
                    Rules are important for a child to grow up disciplined. It is very important to set rules for your child in case he gets angry. A child needs to understand that it is okay to be angry. But showing cruelty or aggression is unacceptable. Therefore, he/she must adhere to the following rules:

                    Fighting, biting, pinching or using violence is not allowed; <br />
                    You must not shout - to solve a problem, everyone talks calmly; <br />
                    It is forbidden to call names or say hurtful things; <br />
                    You must never talk as soon as feelings of anger arise. The child should postpone talking until he or she has calmed down; <br />
                    problems should be solved when everyone is calm; <br />
                    the goal of any argument should be to solve the problem, not to prove one's point; <br />
                    after an outburst of anger, one must shake hands and make up; <br />
                    there is no need to constantly bring up the past.<br />
                    <br />

                    You can add to the list of rules as you see fit.
                </p>
                <b>
                    8. Find an alternative
                </b>
                <p>

                    If a child is not allowed to yell and fight when they feel angry, what should they do? Here are some alternative ways to safely vent their anger:

                    Use a punching bag. Hitting a punching bag or pillow to vent anger is okay, hitting people is not.
                    Invite your child to write the reason for the anger on a piece of paper and tear it up into small pieces.
                    Breathe. Invite your child to take deep breaths and exhale whenever he feels anger. You can do the "Dragon's Breath" exercise: Have the child breathe in through his nose and out through his mouth, as if the dragon were breathing fire.
                    Take your child to a quiet place, away from the things that are making him angry. This will help the child calm down more quickly.
                    Invite your child to draw pictures of his emotions. Colorful drawings will help your child calm his emotions and turn his anger into creativity.
                    Ask your child what calms him or her down. Use these prompts every time you see him getting angry.
                    Stick to the "wiser in the morning" rule. If your child has a problem in the evening, it is better to discuss it the next morning when everyone is calm.
                    Every problem has many solutions. Help your child figure out what is causing the problem, wait a while and come back to the problem when he has calmed down.
                </p>
                <b>
                    9 Games and activities to teach your child how to manage anger:
                </b>
                <b>
                    10 Physical activities to safely express anger:
                </b>
                <b>
                    Conslusion
                </b>
            </div>
            <div className="w-full pb-3  border-b-2 border-gray-500 " />
            <div className="flex  py-4    justify-between items-start gap-x-2">
                <div className='w-full  flex flex-col gap-y-4'>
                    <div className="flex w-full   gap-x-2 border-b-2 border-gray-500 ">
                        <Button text="client comments" />
                        <Button text="Writer/Editor Comments" />
                    </div>
                    <div className="w-full border flex flex-col justify-start items-center p-4 gap-y-8">
                        <div className='w-full flex justify-between items-center'>
                            <span>admin</span>
                            <span>27-02-2023 10:57:48</span>
                        </div>
                        <div className='w-full '>
                            <Textarea className='w-full p-4' placeholder='Please find attached the update versions....' />
                        </div>
                    </div>
                    <InputField type='file' />
                    <div className='flex justify-start items-center gap-2'>
                        <input type="checkbox" name="" id="" />
                        <span>show to user</span>
                    </div>
                    <Button text={"update"} className='w-fit' />
                    <Link href="#" className='underline'>Download Attachment</Link>
                </div>
                <div className='w-1/3 flex flex-col gap-y-4 '>
                    <InputField type='file' />
                    <Button text="Writer comments" className='w-full' />
                </div>
            </div>


        </div>
    )
}

export default Page